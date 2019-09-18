class RwComponentSkeleton extends HTMLElement{
    constructor() {
        super();
        //Private variables
        this._private1 = null;
        //Create a Shadow Root
        this._root = this.attachShadow({"mode": "open"});
    }
    connectedCallback() {
        //Add an initial template
        this._root.innerHTML = `
            <p id="text">My web component Skeleton...</p>
        `;
        this._$text = this._root.querySelector("#text"); //Store important elemens for later use(Prefixing DOM elements with '$')
        this._$text.addEventListener("click", (event) => {
            console.log(event.target);
            this._render();
        } )
    }
    //Private methods
    _render() {
        this._$text.innerText = "...is awesome!"; //Selectively update only parts of the template which need to change
    }
    //Observe attribute changes
    static get observedAttributes() {
        return ["an-important-attribute"];
    }
    //React to attribute changes
    attributeChangedCallback(name, oldValue, newValue){
        //Do stuff
    }
    //Use setters and getters to create an API for your component
    set property1(data){
        if(this._private1 === data) return;
        this._private1 = data;
    }
    get property1(){
        return this._private1;
    }
}

window.customElements.define("rw-skeleton-comp", RwComponentSkeleton);