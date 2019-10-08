import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContraindicationSeverityEnum } from './STU3_ContraindicationSeverityEnum'
import { STU3_Contraindication_Mitigation } from './STU3_Contraindication_Mitigation'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Contraindication      extends STU3_DomainResource
{

   static def : string = 'Contraindication';
   patient : STU3_Reference ;
   category : STU3_CodeableConcept ;
   severity : STU3_ContraindicationSeverityEnum ;
   implicated : STU3_Reference [];
   detail : string ;
   date : string ;
   author : STU3_Reference ;
   identifier : STU3_Identifier ;
   reference : string ;
   mitigation : STU3_Contraindication_Mitigation [];
}
