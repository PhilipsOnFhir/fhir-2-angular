import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Immunization_ProtocolApplied      extends R4_BackboneElement
{

   static def : string = 'Immunization_ProtocolApplied';
   series : string ;
   authority : R4_Reference ;
   targetDisease : R4_CodeableConcept [];
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
