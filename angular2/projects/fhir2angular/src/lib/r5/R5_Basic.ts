import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Basic      extends R5_DomainResource
{

   static def : string = 'Basic';
   identifier : R5_Identifier [];
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   created : string ;
   author : R5_Reference ;
}
