class Panel{

    /** Creates a panel object, the input parameter includes all settings needed to create the element
     * @param {object} settings 
     * @return {object} The final panel object
     */
    constructor(settings){
        this.templateElements = {
            base    : 'div',
            header  : 'div',
            footer  : 'div'
        };
    }

    //Gets a numerical ID that represents this panel uniquely, is used to track panel and its children
    getID(){
        if(Panel.idIndex){
            Panel.idIndex++;
        }else{
            Panel.idIndex = 0;
        }

        return Panel.idIndex;
    }

    createElement(){
        
    }
}