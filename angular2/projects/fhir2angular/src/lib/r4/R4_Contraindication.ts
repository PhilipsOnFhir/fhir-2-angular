import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContraindicationSeverityEnum } from './R4_ContraindicationSeverityEnum'
import { R4_Contraindication_Mitigation } from './R4_Contraindication_Mitigation'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Contraindication      extends R4_DomainResource
{

   static def : string = 'Contraindication';
   patient : R4_Reference ;
   category : R4_CodeableConcept ;
   severity : R4_ContraindicationSeverityEnum ;
   implicated : R4_Reference [];
   detail : string ;
   date : string ;
   author : R4_Reference ;
   identifier : R4_Identifier ;
   reference : string ;
   mitigation : R4_Contraindication_Mitigation [];
}
