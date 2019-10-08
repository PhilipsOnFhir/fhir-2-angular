import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_PractitionerRole_NotAvailable      extends R5_BackboneElement
{

   static def : string = 'PractitionerRole_NotAvailable';
   description : string ;
   during : R5_Period ;
}
