import { R5_ContactPointSystemEnum } from './R5_ContactPointSystemEnum'
import { R5_ContactPointUseEnum } from './R5_ContactPointUseEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Period } from './R5_Period'

export class R5_ContactPoint      extends R5_Element
{

   static def : string = 'ContactPoint';
   system : R5_ContactPointSystemEnum ;
   value : string ;
   use : R5_ContactPointUseEnum ;
   rank : string ;
   period : R5_Period ;
}
