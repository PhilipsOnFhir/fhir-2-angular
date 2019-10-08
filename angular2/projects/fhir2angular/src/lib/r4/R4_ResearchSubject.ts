import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_ResearchSubjectStatusEnum } from './R4_ResearchSubjectStatusEnum'

export class R4_ResearchSubject      extends R4_DomainResource
{

   static def : string = 'ResearchSubject';
   identifier : R4_Identifier [];
   status : R4_ResearchSubjectStatusEnum ;
   period : R4_Period ;
   study : R4_Reference ;
   individual : R4_Reference ;
   assignedArm : string ;
   actualArm : string ;
   consent : R4_Reference ;
}
