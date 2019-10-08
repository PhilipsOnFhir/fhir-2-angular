import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Basic      extends STU3_DomainResource
{

   static def : string = 'Basic';
   identifier : STU3_Identifier [];
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   created : string ;
   author : STU3_Reference ;
}
