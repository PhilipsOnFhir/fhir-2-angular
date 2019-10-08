import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class AdministrableProductDefinition_Characteristic      extends BackboneElement
{

   static def : string = 'AdministrableProductDefinition_Characteristic';
   code : CodeableConcept ;
   status : CodeableConcept ;
}
