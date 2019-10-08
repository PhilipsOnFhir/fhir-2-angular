import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ResearchSubjectStatusEnum } from './STU3_ResearchSubjectStatusEnum'

export class STU3_ResearchSubject      extends STU3_DomainResource
{

   static def : string = 'ResearchSubject';
   identifier : STU3_Identifier ;
   status : STU3_ResearchSubjectStatusEnum ;
   period : STU3_Period ;
   study : STU3_Reference ;
   individual : STU3_Reference ;
   assignedArm : string ;
   actualArm : string ;
   consent : STU3_Reference ;
}
