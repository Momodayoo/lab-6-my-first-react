
 function Greetings(props) { // custom Welcome component
   

    return (
    <div className="Greetings componentBox">
    {/* if the 'name' prop exists, render it on the screen */}
    <h3>Hello {props.name ? props.name: 'World!'}!</h3>
    
    {/* if this component has children, render them here */}
    {props.children}
    
    </div>
    )
}

export default Greetings