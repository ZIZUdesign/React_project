import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    // the value of 'children' is the content found between the opening and closing of the Card component 
   return <div className={classes}>{props.children}</div>;
}

export default Card; 