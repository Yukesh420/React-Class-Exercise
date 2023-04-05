console.log("Message to Developer")
function AlertMsg(){
    const Hi=()=>{alert("Message from Javascript Alert!")}
    return <div><button onClick={Hi}>Click</button></div>
}
ReactDOM.render(<AlertMsg/>,document.getElementById('my div'))