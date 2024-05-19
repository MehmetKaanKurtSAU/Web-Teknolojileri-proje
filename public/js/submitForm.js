new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            // Form gönderildiğinde burada işlemler yapabilirsiniz
            console.log('Form gönderildi:', this.formData);
            // Diğer işlemleri burada gerçekleştirin
        }
    }
});
