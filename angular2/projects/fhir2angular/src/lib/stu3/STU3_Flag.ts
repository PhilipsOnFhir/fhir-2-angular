import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FlagStatusEnum } from './STU3_FlagStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Flag      extends STU3_DomainResource
{

   static def : string = 'Flag';
   identifier : STU3_Identifier [];
   status : STU3_FlagStatusEnum ;
   category : STU3_CodeableConcept ;
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   period : STU3_Period ;
   encounter : STU3_Reference ;
   author : STU3_Reference ;
}
