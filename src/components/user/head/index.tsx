import './style.css'
type UserHeadProps = {
    name: string,
    surname: string,
    year: number
}
const UserHead: React.FC<UserHeadProps> = (props) => (
    <div className='userHead'>
        <div className='title'>Name: {props.name}</div>
        <div className='title'>Surname: {props.surname}</div>
        <div className='title'>Year: {props.year}</div>
    </div>
  )
export default UserHead