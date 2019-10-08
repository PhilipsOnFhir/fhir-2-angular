import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_ContactDetail      extends R4_1_Element
{

   static def : string = 'ContactDetail';
   name : string ;
   telecom : R4_1_ContactPoint [];
}
