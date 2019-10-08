import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_ContactDetail      extends R4_Element
{

   static def : string = 'ContactDetail';
   name : string ;
   telecom : R4_ContactPoint [];
}
