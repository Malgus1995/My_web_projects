import { InjectionToken} from "@angular/core";
import { DateForm} from "./date-form.enum";

export const DF_TOKEN =  new InjectionToken<DateForm>('dateForm')
