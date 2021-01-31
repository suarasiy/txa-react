const EventComp: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const OnDragStart = (event: React.DragEvent<HTMLParagraphElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <p draggable onDragStart={OnDragStart}>Drag me!</p>
    </div>
  )
}

export default EventComp;