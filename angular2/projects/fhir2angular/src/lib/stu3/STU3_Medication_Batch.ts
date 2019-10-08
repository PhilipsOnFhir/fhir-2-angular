import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Medication_Batch      extends STU3_BackboneElement
{

   static def : string = 'Medication_Batch';
   lotNumber : string ;
   expirationDate : string ;
}
