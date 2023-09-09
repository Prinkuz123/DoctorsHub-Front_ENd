import Button from 'react-bootstrap/Button';
const ButtonComponent = (props) => {
  return (
    <div>
    <Button variant="secondary">{props.title}</Button>{' '}
    </div>
  )
}

export default ButtonComponent
