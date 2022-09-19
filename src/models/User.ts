interface IUserProps {
  props: UserDTO;
}

interface UserDTO {
  userID: string;
  userName: string;
  userContact: string;
  userPassword: string;
}

class User {
  protected props: UserDTO;

  public constructor(props: UserDTO) {
    this.props = props;
  }
}

export { IUserProps, UserDTO, User };
