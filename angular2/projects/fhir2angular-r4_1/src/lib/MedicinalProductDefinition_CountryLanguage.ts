import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicinalProductDefinition_CountryLanguage      extends BackboneElement
{

   static def : string = 'MedicinalProductDefinition_CountryLanguage';
   country : CodeableConcept ;
   jurisdiction : CodeableConcept ;
   language : CodeableConcept ;
}
