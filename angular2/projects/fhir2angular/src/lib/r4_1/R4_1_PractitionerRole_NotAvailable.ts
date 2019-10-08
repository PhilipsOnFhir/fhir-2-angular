import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_PractitionerRole_NotAvailable      extends R4_1_BackboneElement
{

   static def : string = 'PractitionerRole_NotAvailable';
   description : string ;
   during : R4_1_Period ;
}
