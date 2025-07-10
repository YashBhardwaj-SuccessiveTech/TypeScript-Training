// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

interface UserCardProps{
  name:string,
  email:string,
  avatarURL:string;
}

export default function UserCard(props: UserCardProps) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      Image: <img src={props.avatarURL} />
    </div>
  );
}
 