import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Substance_Ingredient } from './DSTU2_Substance_Ingredient'
import { DSTU2_Substance_Instance } from './DSTU2_Substance_Instance'

export class DSTU2_Substance      extends DSTU2_DomainResource
{

   static def : string = 'Substance';
   identifier : DSTU2_Identifier [];
   category : DSTU2_CodeableConcept [];
   code : DSTU2_CodeableConcept ;
   description : string ;
   instance : DSTU2_Substance_Instance [];
   ingredient : DSTU2_Substance_Ingredient [];
}
