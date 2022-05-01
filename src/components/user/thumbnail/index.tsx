import './style.css'
type UserThumbnailProps = {
  src: string
}
const UserThumbnail: React.FC<UserThumbnailProps> = (props) => (
    <div className='userThumbnail'>
        <img src={props.src} 
             alt='user thumbnail' 
        />
    </div>
  )
export default UserThumbnail