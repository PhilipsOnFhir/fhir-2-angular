import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Medication_Package } from './DSTU2_Medication_Package'
import { DSTU2_Medication_Product } from './DSTU2_Medication_Product'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Medication      extends DSTU2_DomainResource
{

   static def : string = 'Medication';
   code : DSTU2_CodeableConcept ;
   isBrand : boolean ;
   manufacturer : DSTU2_Reference ;
   product : DSTU2_Medication_Product ;
   package : DSTU2_Medication_Package ;
}
