import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_ContactDetail      extends R5_Element
{

   static def : string = 'ContactDetail';
   name : string ;
   telecom : R5_ContactPoint [];
}
