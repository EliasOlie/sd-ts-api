interface IApiKeyProps {
  props: ApiKeyDTO;
}

interface ApiKeyDTO {
  ownTo: string;
  callsLeft: number;
}

class ApiKey {
  protected props: ApiKeyDTO;

  public constructor(props: ApiKeyDTO) {
    this.props = props;
  }
}

export { IApiKeyProps, ApiKeyDTO, ApiKey };
