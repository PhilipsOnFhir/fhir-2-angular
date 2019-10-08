import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_ResearchSubjectStatusEnum } from './R4_1_ResearchSubjectStatusEnum'

export class R4_1_ResearchSubject      extends R4_1_DomainResource
{

   static def : string = 'ResearchSubject';
   identifier : R4_1_Identifier [];
   status : R4_1_ResearchSubjectStatusEnum ;
   period : R4_1_Period ;
   study : R4_1_Reference ;
   individual : R4_1_Reference ;
   assignedArm : string ;
   actualArm : string ;
   consent : R4_1_Reference ;
}
