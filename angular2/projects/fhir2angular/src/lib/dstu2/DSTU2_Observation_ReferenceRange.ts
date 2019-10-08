import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Observation_ReferenceRange      extends DSTU2_BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : DSTU2_SimpleQuantity ;
   high : DSTU2_SimpleQuantity ;
   meaning : DSTU2_CodeableConcept ;
   age : DSTU2_Range ;
   text : string ;
}
