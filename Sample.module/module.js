var belchmswitch_ = (function(){
  return {
    init: function(){
      this.createListeners();
    },
    createListeners: function(){
      this.on("message", this.formLoaded.bind(this));
    },
    on: function(action, callback){
      window.addEventListener(action, callback);
    },
    formLoaded: function(event){
      if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
        this.form = window.$('form[data-form-id="' + event.data.id + '"]');
        this.form.find('.hs-form-booleancheckbox').each(function(i, elem){
          this.classMe(window.$(elem).find('label'), "mdl-switch mdl-js-switch mdl-js-ripple-effect");
          this.classMe(window.$(elem).find('label').find('span'), "mdl-switch__label");
          this.classMe(window.$(elem).find('input'), "mdl-switch__input");
        }.bind(this)) ;
      }
    },
    classMe: function(elem, cssClass){
      elem.addClass(cssClass);
    }
  }
})();
belchmswitch_.init()
