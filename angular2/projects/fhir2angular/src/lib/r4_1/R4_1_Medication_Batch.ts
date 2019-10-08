import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Medication_Batch      extends R4_1_BackboneElement
{

   static def : string = 'Medication_Batch';
   lotNumber : string ;
   expirationDate : string ;
}
