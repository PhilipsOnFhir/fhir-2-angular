import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Immunization_ProtocolApplied      extends R5_BackboneElement
{

   static def : string = 'Immunization_ProtocolApplied';
   series : string ;
   authority : R5_Reference ;
   targetDisease : R5_CodeableConcept [];
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
