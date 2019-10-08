import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Medication_Batch      extends R5_BackboneElement
{

   static def : string = 'Medication_Batch';
   lotNumber : string ;
   expirationDate : string ;
}