class CalculatorController{
    
    constructor(){
        this.initButtonsEvent();
    }

    initButtonsEvent(){
        let buttons = document.querySelectorAll(".btn");
        
        buttons.forEach(btn =>{
            this.addEventListenerAll(btn, 'click drag', e =>{
                let txtBtn = btn.innerText;
                console.log(txtBtn);
            });
        });
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn);
        });
    }

    
}