import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_ContactDetail      extends STU3_Element
{

   static def : string = 'ContactDetail';
   name : string ;
   telecom : STU3_ContactPoint [];
}
