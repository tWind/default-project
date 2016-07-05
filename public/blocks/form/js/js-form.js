(
    function() {
        var defaultForm = {};

        WindCore.blockRegister(
            $.extend(
                defaultForm,
                WindForm, {
                    getSelector: function() {
                        return '.js-form';
                    },
                    getBindings: function() {
                        return []
                    },
                    initialize: function($target) {
                        console.log($target);
                    }
                }
            )
        );
    }()
);
