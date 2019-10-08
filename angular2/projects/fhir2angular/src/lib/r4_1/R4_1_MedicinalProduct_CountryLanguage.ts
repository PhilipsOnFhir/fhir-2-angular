import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicinalProduct_CountryLanguage      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProduct_CountryLanguage';
   country : R4_1_CodeableConcept ;
   jurisdiction : R4_1_CodeableConcept ;
   language : R4_1_CodeableConcept ;
}
