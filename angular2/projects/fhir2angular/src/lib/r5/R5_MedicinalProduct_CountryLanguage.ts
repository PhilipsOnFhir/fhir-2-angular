import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicinalProduct_CountryLanguage      extends R5_BackboneElement
{

   static def : string = 'MedicinalProduct_CountryLanguage';
   country : R5_CodeableConcept ;
   jurisdiction : R5_CodeableConcept ;
   language : R5_CodeableConcept ;
}
