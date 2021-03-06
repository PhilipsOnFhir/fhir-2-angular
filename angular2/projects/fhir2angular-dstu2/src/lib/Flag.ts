import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FlagStatusEnum } from './FlagStatusEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Flag      extends DomainResource
{

   static def : string = 'Flag';
   identifier : Identifier [];
   category : CodeableConcept ;
   status : FlagStatusEnum ;
   period : Period ;
   subject : Reference ;
   encounter : Reference ;
   author : Reference ;
   code : CodeableConcept ;
}
