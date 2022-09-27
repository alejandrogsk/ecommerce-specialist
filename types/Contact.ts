export interface FormData {
    name: {
        name: string
        placeholder: string
      },
      lastName: {
        name: string
        placeholder: string
      },
      email: {
        name: string
        placeholder: string
      },
      phone: {
        name: string
        placeholder: string
      },
      country: {
        name: string
        placeholder: string
      },
      state: {
        name: string
        placeholder: string
      },
      city: {
        name: string
        placeholder: string
      },
      company: {
        name: string
        placeholder: string
      },
      message: {
        name: string
        placeholder: string
      },
      file: {
        name: string
        placeholder: string
      },
      button: {
        name:string,
        placeholder:string
      }
}


export interface ContactI {
    title: string;
    subtitle: string;
    form: FormData;
}