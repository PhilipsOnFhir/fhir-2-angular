import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FlagStatusEnum } from './R5_FlagStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Flag      extends R5_DomainResource
{

   static def : string = 'Flag';
   identifier : R5_Identifier [];
   status : R5_FlagStatusEnum ;
   category : R5_CodeableConcept [];
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   period : R5_Period ;
   encounter : R5_Reference ;
   author : R5_Reference ;
}
