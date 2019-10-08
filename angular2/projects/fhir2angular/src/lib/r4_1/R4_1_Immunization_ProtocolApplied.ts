import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Immunization_ProtocolApplied      extends R4_1_BackboneElement
{

   static def : string = 'Immunization_ProtocolApplied';
   series : string ;
   authority : R4_1_Reference ;
   targetDisease : R4_1_CodeableConcept [];
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
