import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MedicinalProduct_CountryLanguage      extends R4_BackboneElement
{

   static def : string = 'MedicinalProduct_CountryLanguage';
   country : R4_CodeableConcept ;
   jurisdiction : R4_CodeableConcept ;
   language : R4_CodeableConcept ;
}
