import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Medication_Batch      extends R4_BackboneElement
{

   static def : string = 'Medication_Batch';
   lotNumber : string ;
   expirationDate : string ;
}
