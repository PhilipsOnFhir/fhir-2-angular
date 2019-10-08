import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Medication_Batch      extends DSTU2_BackboneElement
{

   static def : string = 'Medication_Batch';
   lotNumber : string ;
   expirationDate : string ;
}
