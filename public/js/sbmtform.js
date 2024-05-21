new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        submitted: false
    },
    methods: {
        async submitForm() {
            const response = await fetch('/send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.formData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                this.submitted = true;
            } else {
                alert('E-posta gönderilemedi. Lütfen tekrar deneyin.');
            }
        }
    }
});
