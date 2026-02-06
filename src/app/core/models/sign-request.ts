
export class SignInRequest {
  email?: string;
  password?: string;
}

export class SignInResponse {
  accessToken?: string;
  username?: string;
  isAdmin?: boolean;
  surname?: string;
  name?: string;
}

export class SignUpRequest {
  public constructor(init?: Partial<SignUpRequest>) {
    Object.assign(this, init);
  }
  id?: number;
  email?: string;
	password?: string;
  surname?: string;
	name?: string;
	isAdmin?: boolean;
}