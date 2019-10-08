import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_ResearchSubjectStatusEnum } from './R5_ResearchSubjectStatusEnum'

export class R5_ResearchSubject      extends R5_DomainResource
{

   static def : string = 'ResearchSubject';
   identifier : R5_Identifier [];
   status : R5_ResearchSubjectStatusEnum ;
   period : R5_Period ;
   study : R5_Reference ;
   individual : R5_Reference ;
   assignedArm : string ;
   actualArm : string ;
   consent : R5_Reference ;
}
